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
        });

        urls.forEach(element => {
            when(fn).calledWith(element).mockReturnValue(false);
        });
    })
});