const Benchmark = {
    run: function() {
        var VAR_1 = [
          "something",
          "anotherthing",
          "theNextThing",
          "woftam",
          "woftamol",
          "next",
          "theEnd",
        ];
        var VAR_2 = VAR_1.length;
        var VAR_3 = new Array();
        for (VAR_4 = 0; VAR_4 < 170000; VAR_4++) {
          VAR_3.push(VAR_1[VAR_4 % VAR_2]);
        }
        var VAR_5 = VAR_1.join("\n");
        var VAR_9 = new RegExp("^w.*$");
        var VAR_10 = VAR_1.filter(function (VAR_11) {
          return VAR_9.test(VAR_11);
        });
    }
};