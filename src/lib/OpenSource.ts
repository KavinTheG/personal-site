export interface PRDetail {
  title: string;        
  tag: string[];
  link: string;        
  notes: string[];    
}

export interface OpenSourceContribution {
  repo: string;      
  prs: PRDetail[];  
}

const openSourceContributions: OpenSourceContribution[] = [
  {
    repo: "llvm",
    prs: [
      {
        title: "[DAG] Add ISD::VECTOR_COMPRESS handling in computeKnownBits/ComputeNumSignBits",
        tag: ["C++", "LLVM IR"],
        link: "https://github.com/llvm/llvm-project/pull/159692",
        notes: [
          "Added case handling for ISD::VECTOR_COMPRESS in computeKnownBits/ComputeNumSignBits, improving KnownBits propagation across backends",
          "Added test cases for X86 AVX512, AArch64 SVE, and RISC-V RVV"
        ]
      }
    ]
  }
];

export default openSourceContributions
