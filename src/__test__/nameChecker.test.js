import { when } from 'jest-when';
import { nameChecker } from '../client/js/nameChecker'

describe("Testing the Check Name functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the checkForName() function", () => {
        let urls = [
            'http://foo.com/blah_blah',
            'http://foo.com/blah_blah/',
            'http://foo.com/blah_blah_(wikipedia)',
            'http://foo.com/blah_blah_(wikipedia)_(again)',
            'http://www.example.com/wpstyle/?p=364',
            'https://www.example.com/foo/?bar=baz&inga=42&quux',
        ]
        let invalidurls = [
            'http://foo.bar?q=Spaces should be encoded',
            '//',
            '//a',
            '///a',
            '///',
            'http:///a',
            'foo.com',
            'rdar://1234',
            'h://test'
        ]
        const fn = jest.fn();
        urls.forEach(element => {
            when(fn).calledWith(element).mockReturnValue(true);

            // expect(nameChecker(element)).toBeTruthy()
        });

        urls.forEach(element => {
            when(fn).calledWith(element).mockReturnValue(false);
        });
        // invalidurls.forEach(element => {
        //     expect(!nameChecker(element)).toBeTruthy()
        // });
        




        // const mockCallback = jest.fn()
        // forEach(names, mockCallback);
        // expect(mockCallback.mock.results[0].value).toBeCalled();
        // // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        // // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
        // // for (let i=0; i<names.length;i++) {
        // //     // jest.spyOn(global, 'alert').mockImplementation(() => {});
        // //     // Object.defineProperty(global, "window", {
        // //     //     value: {
        // //     //        alert: jest.fn(),
        // //     //     },
        // //     //  });
        // //     nameChecker(names[i])
        // //     expect(global.alert).toBeCalled();
        // // }
    })
});