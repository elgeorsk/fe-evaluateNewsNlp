// Import the js file to test
import { checkEnterValue } from '../client/js/checkEnterValue';

describe('Testing the entered value', () => {
    test('Testing valid text',() =>{
        global.alert = jest.fn();
        // No error message
        expect(global.alert).toHaveBeenCalledTimes(0);
        // Invalid value entered
        expect(checkEnterValue('Main dishes were quite good, but desserts were too sweet for me.')).toBe('Main dishes were quite good, but desserts were too sweet for me.');
        // No error message
        expect(global.alert).toHaveBeenCalledTimes(0);
    });

    test('Testing invalid text',() =>{
        // about alert message handling https://stackoverflow.com/questions/55933105/how-to-mock-or-assert-whether-window-alert-has-fired-in-react-jest-with-typesc

        global.alert = jest.fn();
        // No error message
        expect(global.alert).toHaveBeenCalledTimes(0);
        // Invalid value entered
        expect(checkEnterValue('<h1>Hell there</h1>')).toBe('error');
        // Alert message appeared
        expect(global.alert).toHaveBeenCalledTimes(1);
    });

    test('Double check - Validation of alert message - Test should fail',() =>{
        global.alert = jest.fn();
        // No error message
        expect(global.alert).toHaveBeenCalledTimes(0);
        // Invalid value entered
        expect(checkEnterValue('<h1>Hell there</h1>')).toBe('error');
        // No error message
        expect(global.alert).toHaveBeenCalledTimes(0);
    });
});