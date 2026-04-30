const Benchmark = {
    run: function() {
        var VAR_1 = "i am a string";
        var VAR_2 = 0;
        var VAR_6 = "";
        while (VAR_2++ < 5000) {
          VAR_6 += VAR_1;
        }
    }
};