const Benchmark = {
    run: function() {
        var VAR_1;
        var VAR_2 = '{"a":12}';
        var VAR_3 = "a:12";
        try {
          JSON.parse(VAR_2);
        } catch (VAR_4) {}
        try {
          JSON.parse(VAR_3);
        } catch (VAR_5) {}
    }
};