const Benchmark = {
    run: function() {
        var VAR_1 = "i am a string";
        var VAR_2 = 0;
        var VAR_3 = [];
        while (VAR_2++ < 10000) {
          VAR_3[VAR_3.VAR_4] = VAR_1;
        }
        var VAR_5 = VAR_3.join("");
    }
};