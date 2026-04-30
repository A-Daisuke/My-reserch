const Benchmark = {
    run: function() {
        var VAR_5 = [
          new Date(2013, 11, 12, 1, 2, 3),
          new Date(2011, 11, 12, 1, 2, 3),
          new Date(2012, 11, 12, 1, 2, 3),
          new Date(2014, 11, 12, 1, 2, 3),
          new Date(2015, 11, 12, 1, 2, 3),
          new Date(2015, 11, 12, 1, 2, 3),
          new Date(2015, 11, 12, 1, 2, 3),
          new Date(2015, 11, 12, 1, 1, 3),
          new Date(2015, 11, 12, 1, 2, 2),
          new Date(2017, 11, 12, 1, 2, 3),
        ];
        var VAR_6 = VAR_5.sort((VAR_7, VAR_8) => VAR_7.getTime() - VAR_8.getTime());
    }
};