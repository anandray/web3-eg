# Quality Assurance

The quality assurance concept of the Web3.js project will prevent us from publishing and merging of mistakes and defects.
We are using [Jest]() to write test because it is providing all the required test utilities by default with already
known testing tools from the JavaScript community.  


### Unit Tests

Unit tests will be written for all classes and methods of Web3.js.


#### Coverage Threshold

| Statements    | Branches      | Functions     |  Lines        |
| ------------- | ------------- | ------------- | ------------- | 
| 90%           | 90%           | 90%           | 90%           |


#### Test Template:

``` javascript 
    import Template from './Template';
    
    // Mocks
    jest.mock('./dependency/file.js');
    
    /**
     * Template test
     */
    describe('TemplateTest', () => {
        let template; 
    
        beforeEach(() => {
            // Repeating base setup of this test
            
            template = new Template('string');
        });
    
        it('constructor test', () => {
            // Tests if the constructor is initiating the given class as expected 
            
            expect(template.value).toEqual('string');
        });
   
    });
```


### Integration Tests


Integration tests will be written to test the interaction between the public API layer and the core modules on different runtimes with different Ethereum nodes. 

TBD

### Testing of Types

To test the provided types we have created for being more compatible with the broadly used superset language TypeScript
do we use [dtslint]() to guarantee the defined types are working as expected.

TBD