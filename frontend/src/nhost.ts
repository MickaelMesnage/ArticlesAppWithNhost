import { NhostClient } from '@nhost/react';

const subdomain = import.meta.env.VITE_NHOST_SUBDOMAIN;

const nhost = new NhostClient({
	subdomain,
	region: import.meta.env.VITE_NHOST_REGION,
});

export default nhost;
