const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Asuka", "Shinji", "Rei"],       // Names
      ["https://i.imgur.com/oRJ5Xh1.jpg", // Images
      "https://i.imgur.com/0QDIdNO.jpg", 
      "https://i.imgur.com/L6ZKkuJ.jpg"],
      [150, 300, 200],                    // HP values
      [100, 50, 75],                       // Attack damage values
      "Ramiel", // Boss name
      "https://i.imgur.com/vAZnb5z.jpg", // Boss image
      10000, // Boss hp
      20 // Boss attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();