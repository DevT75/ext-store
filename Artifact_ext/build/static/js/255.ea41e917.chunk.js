"use strict";(self.webpackChunkrewards=self.webpackChunkrewards||[]).push([[255],{9255:(a,n,s)=>{s.d(n,{sendGaslessTransaction:()=>i});var e=s(482);async function i(a){let n,{account:i,transaction:r,serializableTransaction:t,gasless:o}=a;if(t.value&&t.value>0n)throw new Error("Gasless transactions cannot have a value");if("biconomy"===o.provider){const{relayBiconomyTransaction:a}=await s.e(125).then(s.bind(s,5125));n=await a({account:i,transaction:r,serializableTransaction:t,gasless:o})}if("openzeppelin"===o.provider){const{relayOpenZeppelinTransaction:a}=await s.e(177).then(s.bind(s,5177));n=await a({account:i,transaction:r,serializableTransaction:t,gasless:o})}if("engine"===o.provider){const{relayEngineTransaction:a}=await s.e(384).then(s.bind(s,5384));n=await a({account:i,transaction:r,serializableTransaction:t,gasless:o})}if(!n)throw new Error("Unsupported gasless provider");return(0,e.K)({address:i.address,transactionHash:n.transactionHash,chainId:r.chain.id}),n}}}]);
//# sourceMappingURL=255.ea41e917.chunk.js.map