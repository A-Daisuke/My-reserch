const Benchmark = {
    run: function() {
        var VAR_1 = new Array(50000).join("x");
        var VAR_2 = VAR_1.split("");
        var VAR_3 = "Foo bar baz baw meow";
        Array.prototype.slice.call(VAR_2);
        var VAR_4 = VAR_1,
          VAR_5 = 10000;
        while (VAR_5--) VAR_4 += VAR_3;
    }
};