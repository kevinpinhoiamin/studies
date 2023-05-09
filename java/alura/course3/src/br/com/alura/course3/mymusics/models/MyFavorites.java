package br.com.alura.course3.mymusics.models;

public class MyFavorites {

    public void includes(Audio audio) {
        if (audio.getClassification() >= 9) {
            System.out.println(audio.getTitle().concat(" is considered an absolute success and preferred by all!"));
        } else {
            System.out.println(audio.getTitle().concat(" is one that everyone is enjoying."));
        }
    }

}
