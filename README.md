# ReviewTrackers Coding Challenge

- Challenge description and details [here](https://gist.github.com/nvreynolds/1698e40b2ced65ea6c631259ba5538fd).

## Setup/Running the project

1. First run `npm install` from the root directory to install project dependencies.
2. Then run `npm start` to start the project.

## Design Choices

- Project bootstrapped with create-react-app typescript template.
- Typically when interfacting with an API for my data I would leverage a library like react-query to manage cached api state. I also tend to use the contextAPI for app wide data needs like logged user data details, app prefences (light/dark mode).
  - When setting up routing using react-routers newest version I discovered that they now provide a hook to pass context from a parent to child component and I wanted to try it out! The hook is [useOutletContext](https://reactrouter.com/en/main/hooks/use-outlet-context)
- I leveraged react-hook-form for the form logic and Material UI for the form components. All other styling was done by hand.

## Testing

- To run tests use the command `npm test`.

## Future Enhancements

- Create a contextMenu component for the menuIcon that's visible when there is a comment. The menu would contain both Edit and Delete options.
- Create a shared types folder in the root directory, and reference ReviewTypes from there (for any non prop models).
- Adjust project paths to be able to reference paths like `@components` or `@pages`.
  - I prefer absolute paths where it makes sense. If a child is referencing a parent component nested several layers inside of pages I would use relative paths.
