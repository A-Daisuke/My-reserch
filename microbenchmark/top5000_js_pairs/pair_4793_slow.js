const Benchmark = {
    run: function() {
        var VAR_1 = "abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd";
        for (var VAR_2 = 0, VAR_3 = VAR_1.length; VAR_2 < VAR_3; VAR_2 += 4) {
          var VAR_4 = parseInt(
            [VAR_1[VAR_2], VAR_1[VAR_2 + 1], VAR_1[VAR_2 + 2], VAR_1[VAR_2 + 3]].join(""),
            16,
          );
        }
    }
};