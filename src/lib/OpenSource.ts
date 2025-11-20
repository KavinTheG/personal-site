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
    tag: ["C++", "LLVM IR"],
    prs: [
      {
        title: "[X86] Lower mathlib call ldexp into scalef when avx512 is enabled",
        link: "https://github.com/llvm/llvm-project/commit/6c79cc7ff7901e9c8a3a4e924abd0e9dbfae039c",
        notes: [
          "Implemented custom lowering for ISD::FLDEXP to lower to VSCALEF/VSCALEFS instructions on AVX-512 targets",
          "Widened f16 vectors to f32 when FP16 is not available",  
          "Widened 128-/256-bit vectors to full-width AVX-512 types when VLX is unavailable",
        ]
      },
      {
        title: "[DAG] Add ISD::VECTOR_COMPRESS handling in computeKnownBits/ComputeNumSignBits",
        link: "https://github.com/llvm/llvm-project/commit/d46998b1dd1a2db10f4372a0ac8eced9c5b5a073",
        notes: [
          "Added case handling for ISD::VECTOR_COMPRESS in computeKnownBits/ComputeNumSignBits, improving KnownBits propagation across backends",
          "Added test cases for X86 AVX512, AArch64 SVE, and RISC-V RVV"
        ]
      }
    ]
  }
];

export default openSourceContributions
