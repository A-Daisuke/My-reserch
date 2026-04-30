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
        var VAR_9 = VAR_1.join("\n");
        var VAR_5 = VAR_3.join("\n");
        var VAR_10 = new RegExp("^w.*$", "gm");
        var VAR_11 = VAR_9.match(VAR_10);
    }
};