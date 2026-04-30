const Benchmark = {
    run: function() {
        VAR_1 = "asl;dkfja;slkdfj;asldkjfa;sldkfjas;ldkfja;lskdjfa;slkdfja;sldkfjas;lkfdj";
        var VAR_2 = "";
        for (var VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
          VAR_2 = VAR_1.slice(0);
          VAR_2.VAR_4 = 0;
        }
    }
};