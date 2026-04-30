const Benchmark = {
    run: function() {
        var VAR_1 = {
          KEY_1: true,
          KEY_2: true,
          KEY_3: true,
          KEY_4: true,
          KEY_5: true,
          KEY_6: true,
          KEY_7: true,
          KEY_8: true,
          KEY_9: true,
          KEY_10: true,
          KEY_11: true,
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
          if (VAR_1["aaaaa"]) {
            VAR_3++;
          }
        }
    }
};