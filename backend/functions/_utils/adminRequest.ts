import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { nhost } from './nhost';

export async function adminRequest<Type, Params>(
	document: string | TypedDocumentNode<Type, Params>,
	variables?: Params,
	config: Parameters<typeof nhost.graphql.request>[2] = {},
): Promise<Type> {
	const fixNhostGraphql = {
		//related nhost issue here: https://github.com/nhost/nhost/issues/1177#issuecomment-1328085615
		headers: {
			'accept-encoding': null,
		},
	};

	const fixedConfig = {
		...config,
		...fixNhostGraphql,
	};
	const result = await nhost.graphql.request(document, variables, fixedConfig);
	if (result.error) throw result.error;
	return result.data;
}
