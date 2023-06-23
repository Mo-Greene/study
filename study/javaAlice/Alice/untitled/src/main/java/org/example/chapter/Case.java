package org.example.chapter;

public class Case {
    public static void main(String[] args) {
        Judge king = new Judge("왕");
        Moderator whiteRabbit = new Moderator("하얀토끼");
        Witness hatSeller = new Witness("모자장수");

        System.out.println("Case1 Start");
        king.callModerator(whiteRabbit);
        whiteRabbit.findWitness(hatSeller);
        king.provideTestimony(hatSeller);
        hatSeller.provide();
        System.out.println("Case End");
        System.out.println("----");

        Witness cooker = new Witness("요리사");

        System.out.println("Case2 Start");
        king.callModerator(whiteRabbit);
        whiteRabbit.findWitness(cooker);
        king.provideTestimony(cooker);
        cooker.provide();
        System.out.println("Case End");
        System.out.println("----");

        Judge queen = new Judge("여왕");
        Witness alice = new Witness("앨리스");

        System.out.println("Case3 Start");
        queen.callModerator(whiteRabbit);
        whiteRabbit.findWitness(alice);
        queen.provideTestimony(alice);
        alice.provide();
        System.out.println("Case End");
        System.out.println("----");

    }
}

/**
 * 재판장
 */
class Judge {
    private String name;

    public Judge(String name) {
        this.name = name;
    }

    public void callModerator(Moderator moderator) {
        System.out.println(this.name + " : 사회자 '" + moderator.getName() + "'는 증인을 불러온다.");
    }

    public void provideTestimony(Witness witness) {
        System.out.println(this.name + " : 증인 '" + witness.getName() + "'는 증언하라.");
    }
}

/**
 * 증인
 */
class Witness {
    private String name;

    public String getName() {
        return name;
    }

    public Witness(String name) {
        this.name = name;
    }

    public void provide() {
        System.out.println(this.name + " : 증언한다.");
    }
}

/**
 * 사회자
 */
class Moderator {
    private String name;

    public Moderator(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void findWitness(Witness witness) {

        System.out.println(this.name + " : 증인 '" + witness.getName() + "'는 재판석으로 나오라.");
    }
}
