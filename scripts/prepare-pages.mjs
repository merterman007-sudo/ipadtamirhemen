import { cp, mkdir, writeFile } from 'node:fs/promises';
await mkdir('docs',{recursive:true});
await cp('out','docs',{recursive:true});
await writeFile('docs/.nojekyll','');
await writeFile('docs/CNAME','ipadtamirhemen.com.tr\n');
