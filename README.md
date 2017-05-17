
# A base template form

## Dependencies
- `nodejs` >= 4.x  
   For Linux check <https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions>

- `npm`
 
- `less`, `postcss` and `http-serve` should be installed globally
```
$ npm install -g less postcss http-server webpack webpack-dev-server
```
- *note* set proxy in Terminal if needed:
```
$ export http_proxy="www-proxy.dc.ham.mcon.net:8080"
```
`admin` might be needed
    
## Setup    
1. Clone code form gitlab

2. 
```
$ npm install
```

## Dev workflow

1. 
```
$ npm start
```

2. open <http://localhost:8080/>  
  *welcome page* could show up if every dependencies are installed.

- If your `port 8080` is used or http-server doesn't work, change server port script in package.json (<http://stackoverflow.com/questions/25823131/node-http-server-not-working>)

- If the script fails, check `scripts` section in `package.json`. Run each command separatly, to check which dependency is missing. Ask for help.

### Tesing, linting and commiting

#### Testing
- To run tests once (and create coverage-report): `npm run test`
- To run tests and watch: `npm run watch:test`
  This will also be started by `npm start`.

#### Linting
- For JS linting: `npm run lint:eslint`
- For CSS linting: `npm run lint:stylelint`
- Full linting: `npm run lint`

#### Commiting
Before a commit a **commit hook** will run which triggers JS & CSS linting. You can and should only commit if the linting errors are fixed. 


## How to deploy

```
run npm dist
```
generate `/dist` foler for prev-deployment

```
./build.sh
```
This creates `out.zip` which is needed for deployment.

## How to setup wechat web debug tool

- Plaese refer to wiki page:  https://wiki.mcon-group.com/display/MCONGROUP/how+to+use+wechat+web+debug+tool
