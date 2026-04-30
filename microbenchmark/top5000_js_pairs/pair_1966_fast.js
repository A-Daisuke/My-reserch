const Benchmark = {
    run: function() {
        var VAR_1 = "i am a string";
        var VAR_2 = 0;
        var VAR_5 = "";
        while (VAR_2++ < 10000) {
          VAR_5 += VAR_1;
        }
    }
};