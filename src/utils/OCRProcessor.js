export const extractTezroData = async (file, onProgress) => {
  for(let i=0; i<=100; i+=20) {
    onProgress(i);
    await new Promise(r => setTimeout(r, 200));
  }
  return { success: true, cnic: "42101-XXXXXXX-X" };
};
