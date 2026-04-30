const Benchmark = {
    run: function() {
        var VAR_4 = "";
        var VAR_3 = [
          25, 23, 623, 62, 63, 624, 6, 43, 436, 43, 6, 34, 743, 7, 437, 347, 47, 34,
          743, 7, 437, 43, 734, 7, 34, 7, 437, 3, 7, 437, 3, 7347, 34, 73, 7, 34, 43, 7,
          3, 8, 7, 67, 96, 9, 67,
        ];
        var VAR_5 = VAR_3.length;
        while (VAR_5--) {
          VAR_4 += VAR_3[VAR_5];
        }
        console.log(VAR_4);
    }
};