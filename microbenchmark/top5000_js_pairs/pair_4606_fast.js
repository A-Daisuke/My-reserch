const Benchmark = {
    run: function() {
        var VAR_1;
        var VAR_2 = '{"a":12}';
        var VAR_3 = "a:12";
        if (VAR_2.trim()[0] === "{") {
          JSON.parse(VAR_2);
        }
        if (VAR_3.trim()[0] === "{") {
          JSON.parse(VAR_3);
        }
    }
};