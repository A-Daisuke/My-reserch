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
        var VAR_6 = VAR_3.join("\n");
        var VAR_7 = new RegExp("^w.*$", "gm");
        var VAR_8 = VAR_6.match(VAR_7);
    }
};