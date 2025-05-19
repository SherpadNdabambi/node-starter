import { readFile, writeFile } from "fs/promises";
import inquirer from "inquirer";

async function runSetup() {
  // Prompt user for replacement values
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Enter your project name:",
      default: "My Project",
    },
    {
      type: "input",
      name: "projectDescription",
      message: "Enter your project description:",
      default: "A Node.js project",
    },
    {
      type: "input",
      name: "projectSlug",
      message: "Enter your project slug (kebab-case, e.g., my-project):",
      default: "my-project",
    },
    {
      type: "input",
      name: "authorName",
      message: "Enter your name:",
      default: "Your Name",
    },
    {
      type: "input",
      name: "githubUsername",
      message: "Enter your GitHub username:",
      default: "YourGitHubUsername",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address:",
      default: "your_email@address.com",
    },
  ]);

  const replacements = [
    {
      file: "CHANGELOG.md",
      search: "node-starter",
      replace: answers.projectSlug,
    },
    {
      file: "CHANGELOG.md",
      search: "the Node.js Starter template",
      replace: answers.projectName,
    },
    {
      file: "LICENSE",
      search: "Sherpad Ndabambi",
      replace: answers.authorName,
    },
    {
      file: "package.json",
      search: "node-starter",
      replace: answers.projectSlug,
    },
    {
      file: "package.json",
      search: "sherpadNdabambi",
      replace: answers.githubUsername,
    },
    {
      file: "package.json",
      search: "Sherpad Ndabambi",
      replace: answers.authorName,
    },
    {
      file: "package.json",
      search: "Starter project for Node.js projects",
      replace: answers.projectDescription,
    },
    {
      file: "README.md",
      search: "Node.js Starter",
      replace: answers.projectName,
    },
    {
      file: "README.md",
      search: "Starter project for Node.js projects",
      replace: answers.projectDescription,
    },
    {
      file: "README.md",
      search: "node-starter",
      replace: answers.projectSlug,
    },
    {
      file: "README.md",
      search: "sherpadNdabambi",
      replace: answers.githubUsername,
    },
    {
      file: "README.md",
      search: "sgndabambi@gmail.com",
      replace: answers.email,
    },
  ];

  // Process each replacement
  for (const { file, search, replace } of replacements) {
    try {
      const content = await readFile(file, "utf8");
      const updatedContent = content.replace(new RegExp(search, "g"), replace);
      await writeFile(file, updatedContent, "utf8");
      console.log(`Updated ${file}`);
    } catch (error) {
      console.error(`Error updating ${file}:`, error);
    }
  }

  console.log("Setup complete.");
}

runSetup().catch((error) => {
  console.error("Setup failed:", error);
  process.exit(1);
});
