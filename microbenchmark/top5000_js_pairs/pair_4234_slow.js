const Benchmark = {
    run: function() {
        var VAR_1 = {
          KEY_1: 1,
          KEY_2: 2,
          KEY_3: 3,
          KEY_4: 4,
          KEY_5: 5,
          KEY_6: 6,
          KEY_7: 7,
          KEY_8: 8,
        };
        var VAR_2 = [
          "asdf1",
          "asdf2",
          "asdf3",
          "asdf4",
          "asdf5",
          "asdf6",
          "asdf7",
          "asdf8",
        ];
        for (var VAR_3 = 0; VAR_3 < 1000000; VAR_3++) {
          var VAR_4 = VAR_2[VAR_1.KEY_4];
        }
    }
};