package br.com.alura.course3.mymusics;

import br.com.alura.course3.mymusics.models.Music;
import br.com.alura.course3.mymusics.models.MyFavorites;
import br.com.alura.course3.mymusics.models.Podcast;

public class Main {

    public static void main(String[] args) {

        Music myMusic = new Music();
        myMusic.setTitle("Forever");
        myMusic.setSinger("Kiss");

        for (int i = 0; i < 1000; i++) {
            myMusic.play();
        }

        for (int i = 0; i < 50; i++) {
            myMusic.like();
        }

        Podcast myPodcast = new Podcast();
        myPodcast.setTitle("Dev Buble");
        myPodcast.setHost("Kevin Pinho Iamin");

        for (int i = 0; i < 5000; i++) {
            myPodcast.play();
        }

        for (int i = 0; i < 1000; i++) {
            myPodcast.like();
        }

        MyFavorites myFavorites = new MyFavorites();
        myFavorites.includes(myPodcast);
        myFavorites.includes(myMusic);

    }

}
