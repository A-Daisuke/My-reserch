const Benchmark = {
    run: function() {
        VAR_1 = [
          "my string",
          "onother string",
          "and more",
          "thie",
          "data",
          "<pre>",
          "tag",
          "<html",
          "more string",
          "a",
          "b",
          "c",
          "d",
        ];
        VAR_2 = [];
        VAR_3 = VAR_1.length;
        for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          VAR_2.push(VAR_1[VAR_4 % VAR_3]);
        }
    }
};