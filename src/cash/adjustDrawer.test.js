import Adjust from './adjustDrawer'

test('It returns the correct unit title and value', () => {
    let sample = Adjust("DOLLAR", 5, 1, 6)
    expect (sample[0]).toBe("DOLLAR");
    expect (sample[1]).toBe(5);
})
test('It returns the correct unit title and value', () => {
    let sample = Adjust("PENNY", 0.05, 0.01, 0.04)
    expect (sample[0]).toBe("PENNY");
    expect (sample[1]).toBe(0.04);
})