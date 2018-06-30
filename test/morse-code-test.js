describe('#run', () => {
    fit('translates morse-code to English', () => {
        expect(
            run(
                true,
                '- .... .   .-- .. --.. .- .-. -..   --.- ..- .. -.-. -.- .-.. -.--   .--- .. -. -..- . -..   - .... .   --. -. --- -- . ...   -... . ..-. --- .-. .   - .... . -.--   ...- .- .--. --- .-. .. --.. . -.. .-.-.-'
            )
        ).toEqual(
            'the wizard quickly jinxed the gnomes before they vaporized.'
        );
    });
    it('translates English to morse-code', () => {
        expect(
            run(
                false,
                'The wizard quickly jinxed the gnomes before they vaporized.'
            )
        ).toEqual(
            '- .... .   .-- .. --.. .- .-. -..   --.- ..- .. -.-. -.- .-.. -.--   .--- .. -. -..- . -..   - .... .   --. -. --- -- . ...   -... . ..-. --- .-. .   - .... . -.--   ...- .- .--. --- .-. .. --.. . -.. .-.-.-'
        );
    });
    it('returns error string if invalid input', () => {
        expect(run(true, '..- .... ..-. .-.. --- .-    ...-')).toEqual(
            'Invalid Morse Code Or Spacing'
        );
    });
    it('returns error string if invalid input', () => {
        expect(run(true, '')).toEqual('Invalid Morse Code Or Spacing');
    });
});
