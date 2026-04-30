const Benchmark = {
    run: function() {
        var VAR_1 = {
          KEY_1: 1,
          KEY_2: 1,
          KEY_3: 1,
          KEY_4: 1,
          KEY_5: 1,
          KEY_6: 1,
          KEY_7: 1,
          KEY_8: 1,
          KEY_9: 1,
          KEY_10: 1,
          KEY_11: 1,
        };
        var VAR_2 = [
          "a",
          "aa",
          "aaa",
          "aaaa",
          "aaaaa",
          "aaaaaa",
          "aaaaaaa",
          "aaaaaaaa",
          "aaaaaaaaa",
          "aaaaaaaaaa",
          "aaaaaaaaaaa",
        ];
        var VAR_3 = 0;
        for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          if (VAR_1.hasOwnProperty("aaaaa")) {
            VAR_3++;
          }
        }
    }
};