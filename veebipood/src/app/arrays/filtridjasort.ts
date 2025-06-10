export class FiltridJaSort {
    sorteeriAZ(jarjend: Array<string>): Array<string> {
        return jarjend.sort();
    }

    sorteeriZA(jarjend: Array<string>): Array<string> {
        return jarjend.sort().reverse();
    }

    sorteeriVaiksem(jarjend: Array<string>): Array<string> {
        return jarjend.sort((a, b) => a.length - b.length);
    }

    sorteeriSuurim(jarjend: Array<string>): Array<string> {
        return jarjend.sort((a, b) => b.length - a.length);
    }

    sorteeriteineAZ(jarjend: Array<string>): Array<string> {
        return jarjend.sort((a, b) => a.charAt(2).localeCompare(b.charAt(1)));
    }

    sorteeriSonadeArvu(jarjend: Array<string>): Array<string> {
        return jarjend.sort((a, b) => b.split(" ").length - a.split(" ").length);
    }

    filtreeriRohkemKui5Tahelised(jarjend: Array<string>): Array<string> {
        return jarjend.filter(n => n.length > 5)
    }

    filtreeriTapselt3Tahelised(jarjend: Array<string>): Array<string> {
        return jarjend.filter(n => n.length === 3)
    }

    filtreeriLyhendAi(jarjend: Array<string>): Array<string> {
        return jarjend.filter(n => n.includes("ai"));
    }

    filtreeriKellelNeljasTahtI(jarjend: Array<string>): Array<string> {
        return jarjend.filter(n => n[3] === "i");
    }

    filtreeriMTahegaAlgavad(jarjend: Array<string>): Array<string> {
        return jarjend.filter(n => n[0] === "m");
    }

    filtreeriPaarisArvTahti(jarjend: Array<string>): Array<string> {
        return jarjend.filter(n => n.length % 2 === 0);
    }

    filtreeriALoppuga(jarjend: Array<string>): Array<string> {
        return jarjend.filter(n => n.endsWith("a"));
    }

    filtreerivahemalt5Tahelised(jarjend: Array<string>): Array<string> {
        return jarjend.filter(n => n.length >= 5);
    }

    filtreeriTapselt5tahelised(jarjend: Array<string>): Array<string> {
        return jarjend.filter(n => n.length === 5);
    }

    filtreeriLyhendigaIn(jarjend: Array<string>): Array<string> {
        return jarjend.filter(n => n.includes("in"));
    }
    
    filtreeriKellelTeineTahtA(jarjend: Array<string>): Array<string> {
        return jarjend.filter(n => n[1] === "a");
    }

    filtreeriKuni6Tahelised(jarjend: Array<string>): Array<string> {
        return jarjend.filter(n => n.length >= 6);
    }

    filtreeri6Tahelised(jarjend: Array<string>): Array<string> {
        return jarjend.filter(n => n.length === 6);
    }

    filtreeriLoppevadA(jarjend: Array<string>): Array<string> {
        return jarjend.filter(n => n.endsWith("a"));
    }

    filtreeriLoppevadY(jarjend: Array<string>): Array<string> {
        return jarjend.filter(n => n.endsWith("y"));
    }
}
