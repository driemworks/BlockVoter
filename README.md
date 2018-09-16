# BlockVoter

A blockchain based voting application that works by deploying a poll as a smart contract to the Ethereum blockchain, allowing users to join the poll via the contract's unique address.

## Getting Started
### Prerequisites
Install
- nodejs
- java 9
- ganache--cli or metamask
- mongodb (should be set as path variable)

### Installing

- Install MongoDB and add /bin folder as path variable
    - create the directory /drive/data/db in the directory that you're running the project from
Run from the command line using the ```mongod``` command
- Install ganache-cli via npm using the command ```npm install -g ganache-cli``` and start ganache using ```ganache-cli``` 


### Running
There are two types of startup scripts included.

```start-ganache.sh``` that will start mongodb on port 27107, ganache on port 7545, npm on port 4200, and the spring api on 8080.

```start.sh``` does all of the above except for starting ganache (use if you have an ethereum client installed in your browser).


## Built With
* [Angular 6](https://angular.io/) - The web framework used
* [Java 9](http://openjdk.java.net/projects/jdk9/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [MongoDB](https://www.mongodb.com/download-center#community) - Dependency Management
* [Ethereum](https://www.ethereum.org/) - The Ethereum Blockchain/Platform

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Tony Riemer** - *Initial work* - [driemworks](https://github.com/driemworks)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details