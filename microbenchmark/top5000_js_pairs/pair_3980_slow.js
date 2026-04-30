const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        while (VAR_1++ < 100) "asdf" + +new Date();
    }
};