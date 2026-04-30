const Benchmark = {
    run: function() {
        var VAR_1 =
          "ttvmswxjzdgzqxotby_lslonwqaipchgqdo_yz_fqdagixyrobdjtnl_jqzpptzfcdcjjcpjjnnvopmh";
        var VAR_2 = VAR_1;
        var VAR_3 = VAR_2.length,
          VAR_4,
          VAR_5;
        while (VAR_3--) {
          VAR_5 = VAR_2[VAR_3];
          VAR_4 = VAR_3;
          while (VAR_4--) {
            if (VAR_2[VAR_4] === VAR_5) {
              break;
            }
          }
        }
    }
};