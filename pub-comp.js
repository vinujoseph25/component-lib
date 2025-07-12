/**
 * This script helps to intialize or publish a
 * component to the feed
 * @author: Niranjan Kumar
 */
const fs = require("fs");
const glob = require("glob");
const { compilerOptions: tsconfig } = require("./tsconfig.json");
const { execSync } = require("child_process");
const { argv } = require("yargs");
/**
 * Usage CLi
 * node pub-comp.js --init  -OR-  node pub-comp.js --init="Accordion"
 * node pub-comp.js --publish -OR- node pub-comp.js --publish="Accordion"
 */

//Creates the package.json inside all the components
const components = glob.sync(`${tsconfig.rootDir}/*`);
const createPkgJson = (comps) => {
  if (fs.statSync(comps).isDirectory()) {
    console.log(`Processing -> ${comps}`);
    execSync(`cd ${comps} && npm init -y --scope=inclue-uicomps`);
  } else {
    console.log(`Component does not exists -> ${comps}`);
  }
};
const publish = (comp) => {
	if(fs.statSync(comp).isDirectory()){
		// TODO: Update the publish command here
		const out = execSync(`cd ${comp} && echo "Published->${comp}"`).toString();
		console.log(out);
	}
};
switch (true) {
  case argv.hasOwnProperty("init"): {
    if ( fs.existsSync(argv.init)) {
      createPkgJson(`src/components/${argv.init}`);
      console.log(`Finished initializing -> ${argv.init}`);
    } else {
      components.map(createPkgJson);
      console.log("Finished initializing all the components");
    }
    break;
  }

  case argv.hasOwnProperty("publish"): {
    if (fs.existsSync(`src/components/${argv.publish}`)) {
      publish(argv.publish);
    } else {
      components.map(publish);
      console.log(`All components published -> ${argv.publish}`);
    }
    break;
  }
  default: {
    console.log("Choose a CLi");
  }
}

process.exit();
