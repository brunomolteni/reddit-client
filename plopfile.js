const promptPath = require("inquirer-fuzzy-path");

module.exports = function (plop) {
  plop.setPrompt("path", promptPath);

  // -------------- COMPONENT ------------------
  plop.setGenerator("component", {
    description:
      "functional component with the option to include hooks or styles",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What's the component name?",
      },
      {
        type: "path",
        name: "location",
        message: "Where do you want it?",
        rootPath: "src",
        default: "components/",
        itemType: "directory",
        excludePath: (path) =>
          !path.startsWith("components/") && !path.startsWith("pages/"),
      },
      {
        type: "confirm",
        name: "hooks",
        default: false,
        message: "do you want it to include some hooks?",
      },
      {
        type: "confirm",
        name: "css",
        default: false,
        message: "do you want it to include a css module?",
      },
    ],
    actions: ({ css }) => {
      const actions = [
        {
          type: "addMany",
          destination: "src/{{ location }}/{{ pascalCase name}}",
          base: ".plop/component",
          templateFiles: ".plop/component/*.js",
        },
      ];

      if (css)
        actions.push({
          type: "add",
          path:
            "src/{{ location }}/{{ pascalCase name}}/{{ pascalCase name}}.css",
          templateFile: ".plop/component/styles.css",
        });
      return actions;
    },
  });

  // -------------- PAGE ------------------
  plop.setGenerator("page", {
    description: "a functional component with routing to use as page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What's the page name?",
      },
      {
        type: "confirm",
        name: "hooks",
        default: false,
        message: "do you want it to include some hooks?",
      },
      {
        type: "confirm",
        name: "css",
        default: false,
        message: "do you want it to include a css module?",
      },
    ],
    actions: ({ css }) => {
      const actions = [
        {
          type: "addMany",
          destination: "src/{{ location }}/{{ pascalCase name}}",
          base: ".plop/component",
          templateFiles: ".plop/component/*.js",
        },
        {
          type: "append",
          template:
            'import {{ pascalCase name}} from "./pages/{{ pascalCase name }}";',
          path: "src/routes.js",
          pattern: /Route Components/,
        },
        {
          type: "append",
          template: '  "/{{ dashCase name}}": () => <{{ pascalCase name }} />,',
          path: "src/routes.js",
          pattern: /routes = {()/,
        },
      ];

      if (css)
        actions.push({
          type: "add",
          path:
            "src/{{ location }}/{{ pascalCase name}}/{{ pascalCase name}}.css",
          templateFile: ".plop/component/styles.css",
        });

      return actions;
    },
  });

  // -------------- SLICE ------------------
  plop.setGenerator("slice", {
    description:
      "redux slice with actions, reducers, and a hook to access it from components",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What's the slice name?",
      },
      {
        type: "confirm",
        name: "async",
        default: false,
        message: "do you want it to include an example async action ?",
      },
      {
        type: "confirm",
        name: "fetch",
        default: false,
        message: "do you want the hook to include data fetching ?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/reducers/{{ camelCase name}}Slice.js",
        templateFile: ".plop/slice/slice.js",
      },
      {
        type: "append",
        template: "  {{ camelCase name}}: {{ camelCase name}}Reducer,",
        path: "src/reducers/rootReducer.js",
        pattern: /combineReducers\({()/,
      },
      {
        type: "append",
        template:
          'import {{ camelCase name}}Reducer from "./{{ camelCase name}}Slice";',
        path: "src/reducers/rootReducer.js",
        pattern: /Import Reducers/,
      },
      {
        type: "add",
        path: "src/hooks/use{{ pascalCase name}}Slice.js",
        templateFile: ".plop/slice/hook.js",
      },
      {
        type: "append",
        template:
          'export { use{{ pascalCase name}}Slice } from "./use{{ pascalCase name}}Slice";',
        path: "src/hooks/index.js",
        pattern: /$/,
      },
    ],
  });
};
