const path = require('path');
const emoji = require("node-emoji");

const greeting = require("../utils/greeting");

module.exports = {
  name: "create-electrojet",
  description: `Creates new electron project \n\n Usage: \n npm init electrojet <project-name>`,
  alias: ["g", "new", "n", "generate", "c", "create"],
  run: async toolbox => {
    const {
      parameters,
      print: { info, success, printCommands },
      validate,
      installPackages,
      copyFiles,
      promptFor,
      createGit,
    } = toolbox;

    const {
      first: name,
      options: { npm = false, template, starter },
    } = parameters;

    const props = {
      name,
      template,
      starter,
      npm,
    };

    const root = path.resolve(props.name);

    if (!validate.name(props)) {
      printCommands(toolbox);
      process.exit();
    }

    if (!validate.options(props)) {
      const fetch = await promptFor("template");
      props[fetch.type] = fetch.value;
    }

    greeting(`\n${emoji.get("rocket")}  Welcome to Electrojet CLI\n\n`);

    await copyFiles(props);

    await installPackages(root, props);

    await createGit(props);

    success(`Generated project under ${props.name}\n`);
    info(`Next Steps:\n\n  1. cd ${props.name}\n  2. npm start`);
    greeting(`\n${emoji.get("thumbsup")}   Best of Luck for your project\n`);
  },
};
