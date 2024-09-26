namespace SpriteKind {
    export const door = SpriteKind.create()
    export const door1 = SpriteKind.create()
    export const enemylvl2 = SpriteKind.create()
    export const downdoor0 = SpriteKind.create()
    export const boss_stage_1 = SpriteKind.create()
    export const person = SpriteKind.create()
    export const range = SpriteKind.create()
    export const enemylvl4 = SpriteKind.create()
    export const enemysightrange = SpriteKind.create()
    export const door2 = SpriteKind.create()
    export const enemynormal = SpriteKind.create()
    export const door3 = SpriteKind.create()
    export const bossstage2 = SpriteKind.create()
    export const teleportdoor00 = SpriteKind.create()
}
namespace StatusBarKind {
    export const enemyhealth1 = StatusBarKind.create()
    export const bosshealth = StatusBarKind.create()
    export const enemyhealth3 = StatusBarKind.create()
    export const gold = StatusBarKind.create()
    export const Enemyhealth0 = StatusBarKind.create()
    export const bosshealth2 = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTileAt(tiles.getTileLocation(37, 9), sprites.dungeon.greenSwitchUp)
        tiles.setWallAt(tiles.getTileLocation(50, 16), false)
        tiles.setTileAt(tiles.getTileLocation(50, 16), assets.tile`myTile2`)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
    }
})
sprites.onOverlap(SpriteKind.enemylvl4, SpriteKind.Player, function (sprite, otherSprite) {
    pause(200)
    mainhealth.value += -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemysightrange, function (sprite, otherSprite) {
    mySprite4.follow(mySprite, 36)
    sprites.destroy(mySprite7, effects.disintegrate, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`blacksmiths sign`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.showLongText("The sign says: blacksmith’s shop.", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Food-steps`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (mainhealth.value < 100) {
            if (statusbar.value >= 4) {
                game.showLongText("let's see...", DialogLayout.Bottom)
                game.showLongText("how much do you want healed?", DialogLayout.Bottom)
                game.showLongText(game.askForNumber(""), DialogLayout.Bottom)
                game.showLongText("", DialogLayout.Bottom)
                game.showLongText("", DialogLayout.Bottom)
            }
        } else {
            game.showLongText("you are at full health already", DialogLayout.Bottom)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(43, 12))
        }
    }
    if (controller.B.isPressed()) {
        game.showLongText("ow!", DialogLayout.Bottom)
        game.showLongText("stop that!", DialogLayout.Bottom)
        mySprite.y += 10
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`food sign`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.showLongText("the sign says: buy food here!", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTeleportor2`, function (sprite, location) {
    game.splash("boss fight!", "with the snake king")
    tiles.placeOnTile(mySprite, tiles.getTileLocation(37, 9))
    mySprite4 = sprites.create(assets.image`snake king`, SpriteKind.bossstage2)
    tiles.placeOnRandomTile(mySprite4, assets.tile`red flowers spawn`)
    statusbar7 = statusbars.create(20, 4, StatusBarKind.bosshealth2)
    statusbar7.value = 43
    statusbar7.attachToSprite(mySprite4)
    mySprite4.follow(mySprite)
})
statusbars.onZero(StatusBarKind.bosshealth, function (status) {
    sprites.destroy(mySprite4, effects.fire, 5000)
    pause(2000)
    game.splash("stage 1 complete. entering stage 2.", "entering level 4.")
    tiles.setCurrentTilemap(tilemap`level0`)
    mySprite.setPosition(14, 13)
    mainhealth.value = 100
    mySprite5 = sprites.create(assets.image`Villager`, SpriteKind.person)
    tiles.placeOnTile(mySprite5, tiles.getTileLocation(29, 33))
    mySprite6 = sprites.create(assets.image`range`, SpriteKind.range)
    tiles.placeOnTile(mySprite6, tiles.getTileLocation(29, 33))
    mySprite6.changeScale(4, ScaleAnchor.Middle)
    statusbar.value += randint(2, 9)
})
statusbars.onZero(StatusBarKind.Enemyhealth0, function (status) {
    sprites.destroy(mySprite4)
    mySprite8 = sprites.create(assets.image`door1`, SpriteKind.door3)
    statusbar.value += randint(3, 9)
    tiles.placeOnTile(mySprite8, tiles.getTileLocation(110, 41))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemylvl4, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        statusbar5.value += randint(-2, -4)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Gold-sellers steps`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.showLongText("you want gold?", DialogLayout.Bottom)
        game.showLongText("What do you have to offer?", DialogLayout.Bottom)
        game.showLongText("For all that I could give you... let me see...", DialogLayout.Bottom)
        game.showLongText("twenty eight gold", DialogLayout.Bottom)
        game.showLongText("Here you go!", DialogLayout.Bottom)
        tiles.setTileAt(tiles.getTileLocation(15, 29), assets.tile`steps`)
        tiles.setTileAt(tiles.getTileLocation(16, 29), assets.tile`steps`)
        tiles.setTileAt(tiles.getTileLocation(17, 29), assets.tile`steps`)
        tiles.setTileAt(tiles.getTileLocation(18, 29), assets.tile`steps`)
        statusbar.attachToSprite(mySprite)
        statusbar.value += randint(21, 46)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level42`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile3, function (sprite, location) {
    game.showLongText("get ready for a boss fight", DialogLayout.Full)
    mySprite.y += 219
    mySprite4 = sprites.create(assets.image`monster3`, SpriteKind.boss_stage_1)
    tiles.placeOnRandomTile(mySprite4, sprites.swamp.swampTile13)
    statusbar4 = statusbars.create(20, 4, StatusBarKind.bosshealth)
    statusbar4.value = 22
    statusbar4.attachToSprite(mySprite4)
    pause(2000)
    mySprite4.follow(mySprite, 89)
})
sprites.onOverlap(SpriteKind.enemynormal, SpriteKind.Player, function (sprite, otherSprite) {
    pause(213)
    mainhealth.value += -1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`gold sellers sign`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.showLongText("The sign says: gold seller's shop.", DialogLayout.Bottom)
    }
})
statusbars.onZero(StatusBarKind.enemyhealth1, function (status) {
    sprites.destroyAllSpritesOfKind(SpriteKind.enemylvl2, effects.spray, 5000)
    pause(5000)
    tiles.setCurrentTilemap(tilemap`level2-3`)
    mySprite.setPosition(43, 3)
    mainhealth.value += 20
    statusbar.value += randint(1, 2)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.saplingPine, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level-2 forest abyss`)
    mySprite.setPosition(7, 3)
})
statusbars.onZero(StatusBarKind.enemyhealth3, function (status) {
    sprites.destroy(mySprite4, effects.fountain, 1000)
    statusbar.value += randint(0, 1)
    pause(3000)
    game.showLongText("thank you I will bring you to my village and get you healed!", DialogLayout.Full)
    tiles.setCurrentTilemap(tilemap`village1`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 20))
    tiles.placeOnTile(mySprite5, tiles.getTileLocation(66, 19))
    mainhealth.value = 100
    statusbar.value += randint(2, 9)
    mySprite5.setImage(assets.image`person`)
    mySprite6 = sprites.create(assets.image`door1`, SpriteKind.door2)
    tiles.placeOnTile(mySprite6, tiles.getTileLocation(99, 20))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemynormal, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        statusbar6.value += claw_extenders + randint(-3, -5)
        mySprite4.follow(mySprite)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(30, 1))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedNorth, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 27))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`blacksmiths shop`, function (sprite, location) {
    if (controller.A.isPressed()) {
        music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
        game.showLongText("Got gold?", DialogLayout.Bottom)
        if (statusbar.value >= 20) {
            game.showLongText("let's see for that I could give you...", DialogLayout.Bottom)
            game.showLongText("a claw extender.", DialogLayout.Bottom)
            game.showLongText("Which gives +1 damage.", DialogLayout.Bottom)
            if (controller.B.isPressed()) {
                game.showLongText("No? ok.", DialogLayout.Bottom)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(10, 12))
            }
            pause(1000)
            game.showLongText("all yours.", DialogLayout.Bottom)
            statusbar.value += -20
            claw_extenders += -1
            music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
            game.showLongText("you got the claw extender!", DialogLayout.Bottom)
            game.showLongText("The claw extender increases the amount of damage you deal per attack by one. Despite its name it does not increase attack range.", DialogLayout.Full)
            pause(500)
            game.showLongText("bye!", DialogLayout.Bottom)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(10, 12))
        } else {
            game.showLongText("then leave!!", DialogLayout.Bottom)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(10, 19))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.shrub, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.placeOnRandomTile(mySprite, sprites.castle.shrub)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.teleportdoor00, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`level38`)
    sprites.destroyAllSpritesOfKind(SpriteKind.teleportdoor00)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLight5)
    mySprite2 = sprites.create(assets.image`door1`, SpriteKind.door3)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(8, 5))
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(mySprite4)
    game.splash("next level?")
    tiles.placeOnRandomTile(mySprite, sprites.castle.rock0)
    statusbar.value += 1
})
sprites.onOverlap(SpriteKind.bossstage2, SpriteKind.Player, function (sprite, otherSprite) {
    pause(200)
    mainhealth.value += -3
    pause(50)
    mainhealth.value += -1
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchDown, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTileAt(tiles.getTileLocation(2, 0), sprites.dungeon.greenSwitchUp)
        tiles.setWallAt(tiles.getTileLocation(8, 6), false)
        tiles.setWallAt(tiles.getTileLocation(9, 6), false)
    }
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`small grass`, function (sprite, location) {
    game.splash("have fun out there")
    tiles.setCurrentTilemap(tilemap`forest-1`)
    mySprite.setPosition(106, 3)
    mySprite2 = sprites.create(assets.image`door1`, SpriteKind.door)
    mySprite2.setPosition(251, 232)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemylvl2, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        statusbar3.value += -3
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bossstage2, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        statusbar7.value += randint(-2, -5) + claw_extenders
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.boss_stage_1, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        statusbar4.value += -3
        mainhealth.value += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`teleporter1`, function (sprite, location) {
    mySprite4 = sprites.create(assets.image`monster3`, SpriteKind.enemylvl2)
    statusbar3 = statusbars.create(15, 3, StatusBarKind.enemyhealth1)
    statusbar3.attachToSprite(mySprite4)
    statusbar3.value = 16
    game.splash("get ready to battle!")
    tiles.placeOnRandomTile(mySprite, sprites.skillmap.islandTile7)
    tiles.placeOnRandomTile(mySprite4, sprites.swamp.swampTile1)
    pause(500)
    mySprite4.follow(mySprite, 74)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    pause(randint(112, 374))
    mainhealth.value += -1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`door bottom`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`house`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(13, 15))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`door`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(17, 1))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.door1, function (sprite, otherSprite) {
    game.showLongText("If stuck on one tile island press A", DialogLayout.Bottom)
    game.showLongText("To attack press B", DialogLayout.Bottom)
    sprites.destroyAllSpritesOfKind(SpriteKind.door1)
    tiles.setCurrentTilemap(tilemap`battle-1`)
    game.splash("battle!!!", "get ready. then press A to begin.")
    tiles.placeOnRandomTile(mySprite, sprites.castle.shrub)
    mySprite4 = sprites.create(assets.image`monster`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mySprite4, sprites.swamp.swampTile13)
    statusbar2 = statusbars.create(15, 3, StatusBarKind.EnemyHealth)
    statusbar2.attachToSprite(mySprite4)
    mainhealth.value = 100
    statusbar2.value = 15
    mySprite4.follow(mySprite, 58)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.door, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`forest level-1 stage-2`)
    mySprite.setPosition(0, 39)
    mySprite3 = sprites.create(assets.image`door1`, SpriteKind.door1)
    mySprite3.setPosition(251, 25)
    sprites.destroyAllSpritesOfKind(SpriteKind.door)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.range, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.range)
    game.showLongText("please help me!", DialogLayout.Bottom)
    game.showLongText("The monsters are blocking the way home!", DialogLayout.Bottom)
    game.showLongText("please get rid of them!", DialogLayout.Bottom)
    game.showLongText("I'll show you where they are.", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`path to village stage1 level4`)
    game.showLongText("they are this way. PLEASE defeat them. PLEASE! this is how I got stuck: I was just on a hunting trip and when I came back they were blocking the way!", DialogLayout.Full)
    mySprite4 = sprites.create(assets.image`monster snake lvl 4`, SpriteKind.enemylvl4)
    mySprite7 = sprites.create(assets.image`snake sight range`, SpriteKind.enemysightrange)
    statusbar5 = statusbars.create(14, 4, StatusBarKind.enemyhealth3)
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(35, 7))
    tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 7))
    tiles.placeOnTile(mySprite5, tiles.getTileLocation(0, 7))
    statusbar5.attachToSprite(mySprite4)
    statusbar5.value = 19
    mySprite5.sayText("this is as far as I am going.", 5000, false)
    tiles.placeOnTile(mySprite7, tiles.getTileLocation(35, 7))
    mySprite7.setScale(6, ScaleAnchor.Middle)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(42, 38))
    mySprite5 = sprites.create(img`
        . . . . . . . . b b . . . 2 . . 
        . . . . . . . . b b . . . . . . 
        . . . b b b . . . . . . . . . . 
        . . b d d b . 2 . . . . . b b . 
        . b d d d b . . . . . . b d d b 
        . b d d b . . . . b b . b d d b 
        . b b b . . . . . b b . . b b . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . b b b d d d d d d b b b . . 
        . b d c c c b b b b c c d d b . 
        b d d c b . . . . . b c c d d b 
        c d d b b . . . . . . b c d d c 
        c b d d d b b . . . . b d d c c 
        . c c b d d d d b . c c c c c c 
        . . . c c c c c c 2 2 . . . . . 
        `, SpriteKind.teleportdoor00)
    tiles.placeOnTile(mySprite5, tiles.getTileLocation(48, 41))
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile19, function (sprite, location) {
    mySprite.setPosition(62, -3)
    tiles.setCurrentTilemap(tilemap`level-3`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`chest`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTileAt(tiles.getTileLocation(3, 1), sprites.dungeon.darkGroundCenter)
        claw_extenders += -3
        sprites.destroy(mySprite5)
        pause(1000)
        tiles.setCurrentTilemap(tilemap`level36`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
    }
})
sprites.onOverlap(SpriteKind.enemylvl2, SpriteKind.Player, function (sprite, otherSprite) {
    pause(110)
    mainhealth.value += -1
})
sprites.onOverlap(SpriteKind.boss_stage_1, SpriteKind.Player, function (sprite, otherSprite) {
    pause(138)
    mainhealth.value += -2
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.door3, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`final boos stage 2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 1))
    sprites.destroyAllSpritesOfKind(SpriteKind.door3)
})
statusbars.onZero(StatusBarKind.bosshealth2, function (status) {
    sprites.destroyAllSpritesOfKind(SpriteKind.bossstage2, effects.ashes, 2000)
    pause(3968)
    game.splash("stage 2 Boss defeted")
    tiles.setCurrentTilemap(tilemap`level40`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.door2, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.door2)
    tiles.setCurrentTilemap(tilemap`lvl 4`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 6))
    mySprite4 = sprites.create(assets.image`monster snake lvl 4`, SpriteKind.enemynormal)
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(95, 41))
    statusbar6 = statusbars.create(12, 3, StatusBarKind.Enemyhealth0)
    statusbar6.attachToSprite(mySprite4)
    statusbar6.value = 24
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    game.splash("you escaped the spirits lair", "and moved on to level 2")
    tiles.setCurrentTilemap(tilemap`level-2 sky forest`)
    mainhealth.value += 24
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(22, 32))
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDark3, function (sprite, location) {
    if (controller.B.isPressed()) {
        tiles.setTileAt(tiles.getTileLocation(31, 2), sprites.builtin.forestTiles10)
        pause(2000)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(29, 11))
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        statusbar2.value += claw_extenders + randint(-2, -4)
    }
})
let mySprite3: Sprite = null
let statusbar2: StatusBarSprite = null
let statusbar3: StatusBarSprite = null
let mySprite2: Sprite = null
let statusbar6: StatusBarSprite = null
let statusbar4: StatusBarSprite = null
let statusbar5: StatusBarSprite = null
let mySprite8: Sprite = null
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let statusbar7: StatusBarSprite = null
let mySprite7: Sprite = null
let mySprite4: Sprite = null
let claw_extenders = 0
let statusbar: StatusBarSprite = null
let mainhealth: StatusBarSprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`home`)
mySprite = sprites.create(assets.image`cat`, SpriteKind.Player)
mainhealth = statusbars.create(45, 3, StatusBarKind.Health)
mainhealth.attachToSprite(mySprite)
mainhealth.setLabel("HP")
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
statusbar = statusbars.create(28, 3, StatusBarKind.gold)
statusbar.value = 1
statusbar.setLabel("gold")
statusbar.attachToSprite(mySprite, 6, 2)
statusbar.setColor(5, 2)
tiles.placeOnRandomTile(mySprite, assets.tile`log`)
claw_extenders = 0
game.onUpdate(function () {
    characterAnimations.runFrames(
    mySprite,
    [img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 f . f d f 
        . f 2 2 2 2 2 2 b b f f d f 
        . f b d d d d d d b b d b f 
        . f d d d d d b d d f f f . 
        . f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . 
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e b f b . 
        f d d f d d f d d f f d f . 
        f b d d b b d d 2 b f d f . 
        . f 2 2 2 2 2 2 d b d b f . 
        . f d d d d d d d f f f . . 
        . f d b d f f f d f . . . . 
        . . f f f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 b f f d f 
        . f 2 2 2 2 2 2 d b b d b f 
        . f d d d d d d d f f f f . 
        . . f d b d f d f . . . . . 
        . . . f f f f f f . . . . . 
        `],
    100,
    characterAnimations.rule(controller.dx())
    )
})
game.onUpdate(function () {
    characterAnimations.runFrames(
    mySprite,
    [img`
        . . . . e e e . . . . e e e 
        . . . . c d d c . . c d d c 
        . . . . c b d d f f d d b c 
        . . . . c 3 b d b d d b 3 c 
        . . . . f b 3 d d d d 3 b f 
        . . . . e d d d d d d d d e 
        b f b . e d f d d d d f d e 
        f d f . f d d f d d f d d f 
        f d f . f 2 d d b b d d b f 
        f d f f b b 2 2 2 2 2 2 f . 
        f b d b b d d d d d d b f . 
        . f f f d d b d d d d d f . 
        . . . f d f f d f f f d f . 
        . . . f f . . f f . . f f . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . e e e . . . . e e e 
        . . . . c d d c . . c d d c 
        . . . . c b d d f f d d b c 
        . . . . c 3 b d b d d b 3 c 
        . . . . f b 3 d d d d 3 b f 
        . . . . e d d d d d d d d e 
        . b f b e d f d d d d f d e 
        . f d f f d d f d d f d d f 
        . f d f b 2 d d b b d d b f 
        . f b d b d 2 2 2 2 2 2 f . 
        . . f f f d d d d d d d f . 
        . . . . f d f f f d b d f . 
        . . . . f f . . f f f f . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . e e e . . . . e e e 
        . . . . c d d c . . c d d c 
        . . . . c b d d f f d d b c 
        . . . . c 3 b d b d d b 3 c 
        . . . . f b 3 d d d d 3 b f 
        . . . . e d d d d d d d d e 
        b f b . e d f d d d d f d e 
        f d f . f d d f d d f d d f 
        f d f f b 2 d d b b d d b f 
        f b d b b d 2 2 2 2 2 2 f . 
        . f f f f d d d d d d d f . 
        . . . . . f d f d b d f . . 
        . . . . . f f f f f f . . . 
        `],
    100,
    controller.dx()
    )
})
