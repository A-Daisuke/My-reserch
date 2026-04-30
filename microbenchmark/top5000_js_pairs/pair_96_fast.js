const Benchmark = {
    run: function() {
        var FUNCTION_1 = (VAR_1) => VAR_1.test(`url(\ta\ta${"\t".repeat(20)})`);
        FUNCTION_1(/url\(\s*([^\s].*[^\s])\s*\)/gi);
    }
};