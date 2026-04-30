const Benchmark = {
    run: function() {
        for (VAR_1 = 0; VAR_1 < 1000000; VAR_1++) {
          VAR_2 = [1, "string"];
          VAR_2[0] += 1;
          VAR_2[1] += "foobar";
        }
    }
};