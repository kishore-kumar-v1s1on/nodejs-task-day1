const { writeFile, readFile } = require("node:fs/promises");


async function createAndWriteDataIntoFile(curr_date = new Date()) {
  try {
    var fileData = {
      date: curr_date.getDate(),
      hour: curr_date.getHours(),
      minutes: curr_date.getMinutes(),
    };
    await writeFile(
      `${fileData.date}-${fileData.hour}-${fileData.minutes}.txt`,
      curr_date.toString()
    );
  } catch (err) {
    console.error(err);
  }
}


createAndWriteDataIntoFile(new Date());


//How to Read data from the file anime given as input:


async function readDataFromFile(curr_date = new Date()) { 
  try {
    var fileData = {
        date: curr_date.getDate(),
        hour: curr_date.getHours(),
        minutes: curr_date.getMinutes(),
      };

    const result = await readFile(`${fileData.date}-${fileData.hour}-${fileData.minutes}.txt`);
    console.log(result.toString());
  } catch (error) {
    console.log(error);
  }
}
readDataFromFile();


