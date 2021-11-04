import { nameChecker } from '../client/js/nameChecker'

describe("Testing the Check Name functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the checkForName() function", () => {
        // Define the input for the function, if any, in the form of variables/array
        //    let event;
        let names = [
            "Picard",
            "Janeway",
            "Kirk",
            "Archer",
            "Georgiou"
        ]
        // Define the expected output, if any, in the form of variables/array
        
        // const TestModule = (function() {
            //     const notification = () => {
                //        window.alert("Welcome, Captain!")
                //     };
                //     return {
                    //        notification: notification,
                    //     };
        //  })();
        expect(handleSubmit).toBeUndefined();
        const mockCallback = jest.fn()
        forEach(names, mockCallback);
        expect(mockCallback.mock.results[0].value).toBeCalled();
        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
        // for (let i=0; i<names.length;i++) {
        //     // jest.spyOn(global, 'alert').mockImplementation(() => {});
        //     // Object.defineProperty(global, "window", {
        //     //     value: {
        //     //        alert: jest.fn(),
        //     //     },
        //     //  });
        //     nameChecker(names[i])
        //     expect(global.alert).toBeCalled();
        // }
    })
});