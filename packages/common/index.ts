
export default function common() {
  console.log("hello from common 12k - " + test(3));
};

function test(n: number){
  return (n*2).toString()
}