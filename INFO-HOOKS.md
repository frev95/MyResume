Hooks.md
# Les Hooks de React

Les hooks sont des fonctions qui permettent d'utiliser des fonctionnalités de React, comme l'état et les effets, dans les composants fonctionnels sans avoir à écrire un composant basé sur une classe.

## Les Hooks d'état

Les hooks d'état permettent de gérer l'état d'un composant fonctionnel. Ils sont utilisés pour stocker des données qui vont être modifiées au cours du temps. Ils permettent de remplacer les états et les cycles de vie des composants. Ces hooks sont au nombre de deux : `useState` et `useReducer`.

### `useState`

`useState` permet de déclarer une variable d'état dans un composant fonctionnel. Cette variable d'état est un tableau de deux éléments : la valeur de l'état et une fonction qui permet de modifier la valeur de l'état. La fonction `useState` prend en paramètre la valeur initiale de l'état.

```jsx
const [count, setCount] = useState(0);
```

Dans l'exemple ci-dessus, la variable d'état `count` est initialisée à `0` et la fonction `setCount` permet de modifier la valeur de `count`. Il est possible d'utiliser plusieurs fois `useState` dans un même composant fonctionnel.

```jsx
const [count, setCount] = useState(0);
const [name, setName] = useState("John");
```

Attention, la mise à jour d'un état ne fait pas de manière directe. Il faut obligatoirement utiliser le setter de l'état. Par exemple, pour incrémenter la variable d'état `count` de `1`, il faut utiliser la syntaxe suivante :

```jsx
setCount(count + 1);
```

#### Exemples

Ici nous allons mettre en place un compteur qui s'incrémente de `1` à chaque fois que l'utilisateur clique sur un bouton.

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>Cliquez ici</button>
    </div>
  );
}

export default Counter;
```

Ici nous allons mettre en place un formulaire qui permet de modifier le nom de l'utilisateur.

```jsx
import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("John");

  return (
    <div>
      <p>Bonjour {name}</p>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </div>
  );
}

export default Form;
```

Pour terminer nous allons ajouter à une liste des éléments. Pour cela nous allons utiliser un tableau d'état.

```jsx
import React, { useState } from "react";

function List() {
  const [list, setList] = useState([]);

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={() => setList([...list, "Element"])}>Ajouter</button>
    </div>
  );
}

export default List;
```

Pour ajouter un élément à la liste, nous utilisons le setter de l'état en lui passant un nouveau tableau qui contient tous les éléments de la liste actuelle et le nouvel élément. Pour cela nous utilisons l'opérateur de décomposition `...` (équivalent de +=).

Résumé : `useState` permet de déclarer une variable d'état dans un composant fonctionnel. Cette variable d'état est un tableau de deux éléments : la valeur de l'état et une fonction qui permet de modifier la valeur de l'état. La fonction `useState` prend en paramètre la valeur initiale de l'état.


### `useReducer`

`useReducer` permet de gérer l'état d'un composant fonctionnel. Il est similaire à `useState` mais il est plus adapté pour gérer des états complexes. `useReducer` prend en paramètre une fonction de réduction et une valeur initiale. La fonction de réduction prend en paramètre l'état actuel et une action. Elle retourne le nouvel état.

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

#### Exemples

Ici nous allons mettre en place un compteur qui s'incrémente de `1` à chaque fois que l'utilisateur clique sur un bouton. Pour cela nous allons utiliser `useReducer`.

```jsx
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Vous avez cliqué {state.count} fois</p>
      <button onClick={() => dispatch({ type: "increment" })}>Cliquez ici</button>
    </div>
  );
}

export default Counter;
```

Ici nous allons mettre en place un formulaire qui permet de modifier le nom de l'utilisateur. Pour cela nous allons utiliser `useReducer`.

```jsx
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "change":
      return { name: action.name };
    default:
      throw new Error();
  }
}

function Form() {
  const [state, dispatch] = useReducer(reducer, { name: "John" });

  return (
    <div>
      <p>Bonjour {state.name}</p>
      <input
        type="text"
        value={state.name}
        onChange={(event) => dispatch({ type: "change", name: event.target.value })}
      />
    </div>
  );
}

export default Form;
```

Résumé : préférez `useReducer` à `useState` lorsque vous avez un état complexe à gérer, comme un tableau ou un objet.

---

## Les Hooks d'effets

Les hooks d'effets permettent d'exécuter des effets de bord dans un composant fonctionnel. Ils sont utilisés pour effectuer des actions qui ne sont pas directement liées au rendu du composant. Ces hooks sont au nombre de deux : `useEffect` et `useLayoutEffect`.

### `useEffect`

`useEffect` permet d'exécuter un effet de bord dans un composant fonctionnel. Il prend en paramètre une fonction qui sera exécutée à chaque fois que le composant sera rendu. Cette fonction peut retourner une fonction de nettoyage qui sera exécutée lorsque le composant sera démonté.

```jsx
useEffect(() => {
  // Effet de bord
  return () => {
    // Nettoyage
  };
});
```

#### Exemples

Ici nous allons mettre en place un compteur qui s'incrémente de `1` à chaque fois que l'utilisateur clique sur un bouton. Pour cela nous allons utiliser `useEffect`.

```jsx
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Vous avez cliqué ${count} fois`;
  });

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>Cliquez ici</button>
    </div>
  );
}

export default Counter;
```

Ici nous allons mettre en place un formulaire qui permet de modifier le nom de l'utilisateur. Pour cela nous allons utiliser `useEffect`.

```jsx
import React, { useState, useEffect } from "react";

function Form() {
  const [name, setName] = useState("John");

// Montage du composant:
  useEffect(() => {
    document.title = `Bonjour ${name}`;
  });

// Démontage du composant:
  return (
    <div>
      <p>Bonjour {name}</p>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </div>
  );
}

export default Form;
```

Dans cette seconde version nous allons également utiliser une fonction de nettoyage pour remettre le titre de la page à sa valeur initiale.

```jsx
import React, { useState, useEffect } from "react";

function Form() {
  const [name, setName] = useState("John");

  useEffect(() => {
    document.title = `Bonjour ${name}`;

    return () => {
      document.title = "React App";
    };
  });

  return (
    <div>
      <p>Bonjour {name}</p>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </div>
  );
}

export default Form;
```

Dans les deux exemples de formulaire, vous pouvez vous poser la question concernant `document.title`. En effet, `document.title` est une variable globale et n'est pas liée au composant. Pourtant, à chaque fois que le composant est rendu, le titre de la page est mis à jour. C'est parce que `useEffect` est exécuté à chaque fois que le composant est rendu. Pour éviter cela, il est possible de passer un tableau de dépendances en second paramètre de `useEffect`. Ce tableau permet de spécifier les variables qui doivent être surveillées. Si l'une de ces variables est modifiée, alors l'effet de bord est exécuté.

```jsx
useEffect(() => {
  // Effet de bord
  return () => {
    // Nettoyage
  };
}, [count]);
```

Dans l'exemple ci-dessus, l'effet de bord est exécuté uniquement lorsque la variable `count` est modifiée. Si le tableau de dépendances est vide, alors l'effet de bord est exécuté uniquement lorsque le composant est monté et démonté.

##### Mount, Update, Unmount

C'est peut-être un mystique cette histoire de "monté et démonté". En fait, un composant React peut être dans trois états différents :

- **Mount** : le composant est monté dans le DOM. C'est-à-dire que le composant est rendu pour la première fois.
- **Update** : le composant est mis à jour. C'est-à-dire que le composant est rendu à nouveau.
- **Unmount** : le composant est démonté du DOM. C'est-à-dire que le composant n'est plus rendu.

C'est trois phases sont importantes à comprendre pour bien utiliser `useEffect`. En effet, `useEffect` est exécuté à chaque fois que le composant est monté, mis à jour et démonté. C'est pour cela qu'il est important de spécifier les dépendances de `useEffect`. Cela permet de contrôler quand l'effet de bord est exécuté.

Voici un tableau récapitulatif des différentes phases avec une ligne de vie :

| Phase    | Monté | Mise à jour | Démonté |
| -------- | ----- | ----------- | ------- |
| Mount    | X     |             |         |
| Update   |       | X           |         |
| Unmount  |       |             | X       |


Résumé : `useEffect` exécute un effet de bord dans un composant fonctionnel. Il prend en paramètre une fonction qui sera exécutée à chaque fois que le composant sera rendu. Cette fonction peut retourner une fonction de nettoyage qui sera exécutée lorsque le composant sera démonté.

### `useLayoutEffect`

`useLayoutEffect` permet d'exécuter un effet de bord dans un composant fonctionnel. Il est similaire à `useEffect` mais il est exécuté avant le rendu du composant. Il prend en paramètre une fonction qui sera exécutée à chaque fois que le composant sera rendu. Cette fonction peut retourner une fonction de nettoyage qui sera exécutée lorsque le composant sera démonté comme `useEffect`.

```jsx
useLayoutEffect(() => {
  // Effet de bord
  return () => {
    // Nettoyage
  };
});
```

#### Exemple

Ici nous allons mettre en place un compteur qui s'incrémente de `1` à chaque fois que l'utilisateur clique sur un bouton. Pour cela nous allons utiliser `useLayoutEffect`.

```jsx
import React, { useState, useLayoutEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    document.title = `Vous avez cliqué ${count} fois`;
  });

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>Cliquez ici</button>
    </div>
  );
}

export default Counter;
```

Comme vous le voyez, le code est identique à celui de `useEffect`. La seule différence est que le titre de la page est mis à jour avant le rendu du composant. Cela peut être utile dans certains cas.

| Phase    | Monté | Mise à jour | Démonté |
| -------- | ----- | ----------- | ------- |
| Mount    | X     |             |         |
| Update   | X     | X           |         |
| Unmount  |       |             | X       |

Résumé : faites usage de `useLayoutEffect` lorsque vous avez besoin de mettre à jour le DOM avant le rendu du composant.

---

Une petite pause s'impose avant de passer au `useContext`, `useCallback` et `useMemo`.

Vous venez du monde de l'intégration HTML CSS et avez les bases en JavaScript. Cela peut être troublant d'aborder les concepts de React. Rappelons-nous les objectifs de React :

- Créer des composants réutilisables
- Créer des composants dynamiques
- Créer des composants maintenables
- Créer des composants performants
- Créer des composants testables
- Créer des composants accessibles
- Créer des composants évolutifs
- Créer des composants interopérables
- Créer des composants sécurisés
- Créer des composants internationalisables

Bref, composant, composant, composant. React est un "framework" de composants. Il est donc important de bien comprendre ce qu'est un composant. Un composant est une abstraction qui permet de créer des interfaces utilisateur. Un composant est composé de trois choses :

- Une entrée : les propriétés
- Une sortie : l'interface utilisateur
- Un état : les données

Les propriétés sont les données qui sont passées au composant. Elles sont immuables. L'interface utilisateur est le rendu du composant. Elle est définie par le code JSX. Les données sont les informations qui sont stockées dans le composant. Elles sont modifiables.

Oubliez le fait de faire de l'intégration au sens propre de la discipline. Vous n'allez plus créer des pages HTML avec du CSS. Vous allez créer des composants React. Vous allez créer des interfaces utilisateur. Vous allez créer des composants qui vont être réutilisables, dynamiques, etc.

Maintenant que nous avons fait une petite pause, nous pouvons continuer avec les hooks.

---

## Hook de contexte

Le hook de contexte permet de partager des données entre des composants sans avoir à passer par les propriétés (props). Il est utilisé pour partager des données qui sont utilisées par plusieurs composants. Il se nomme `useContext`.

### `useContext`

`useContext` permet de récupérer des données partagées par un composant parent. Il prend en paramètre un contexte. Ce contexte est créé avec la fonction `createContext`. Cette fonction retourne un objet qui contient deux éléments : le contexte et le fournisseur. Le contexte est un objet qui permet de récupérer les données partagées. Le fournisseur est un composant qui permet de fournir les données partagées aux composants enfants.

```jsx
const MyContext = createContext();

function MyProvider({ children }) {
  const [data, setData] = useState("Martin");

  return <MyContext.Provider value={{ data, setData }}>{children}</MyContext.Provider>;
}
```

Avec ce hook, on évite de passer les données partagées par les propriétés. On peut donc les récupérer dans les composants enfants directement sans faire de "prop drilling", en français "forage de propriété". C'est pas très joli comme traduction, mais pour vulgariser, c'est le fait de passer des propriétés à des composants qui n'en ont pas besoin.

## Hook de rappel

"Allô, vous avez essayé de me joindre ?" Ce hook permet de mémoriser une fonction. Il est utilisé pour éviter de créer des fonctions à chaque rendu d'un composant. Il se nomme `useCallback`.

### `useCallback`

Cas de figure, vous avez un composant qui rend une liste de fruits. Chaque fruit est un composant. Chaque fruit a un bouton qui permet de supprimer le fruit. Lorsque l'utilisateur clique sur le bouton, le fruit est supprimé de la liste. Pour cela, il faut passer une fonction au composant fruit qui permet de supprimer le fruit. Cette fonction est créée dans le composant parent. A chaque fois que le composant parent est rendu, la fonction est créée. Ce n'est pas très performant. Pour éviter cela, on peut utiliser `useCallback`.

#### Exemple

Ici nous allons mettre en place une liste de fruits. Chaque fruit a un bouton qui permet de supprimer le fruit. Pour cela nous allons utiliser `useCallback`.

```jsx
import React, { useState, useCallback } from "react";

function Fruit({ name, onDelete }) {
  return (
    <li>
      {name} <button onClick={onDelete}>Supprimer</button>
    </li>
  );
}

function List() {
  const [list, setList] = useState(["Pomme", "Poire", "Banane"]);

  const handleDelete = useCallback((index) => {
      setList(list.filter((_, i) => i !== index));
    },
    [list]
  );

  return (
    <ul>
      {list.map((item, index) => (
        <Fruit key={index} name={item} onDelete={() => handleDelete(index)} />
      ))}
    </ul>
  );
}

export default List;
```

Que se passe t-il dans le `setList` avec le code suivant : `setList(list.filter((_, i) => i !== index))` ? On filtre la liste pour ne garder que les éléments dont l'index est différent de l'index du fruit à supprimer. C'est comme **faire un tri** où on ne garde que les éléments **qui ne sont pas égaux à l'élément à supprimer**.

Résumé : `useCallback` permet de mémoriser une fonction. Il est utilisé pour éviter de créer des fonctions à chaque rendu d'un composant. Lorsqu'on parle de "créer une fonction", on parle de créer une nouvelle référence de fonction. C'est-à-dire que la fonction est créée à chaque rendu du composant. Une fois de plus, c'est pas très performant.

## Hook de mémoïsation

Moïse ? Non non, mémoïsation. Ce hook permet de mémoriser une valeur. Il est utilisé pour éviter de calculer une valeur à chaque rendu d'un composant. Il se nomme `useMemo`.

Avant d'aller plus loin, rappel ou découverte de la mémoïsation. La mémoïsation est une technique qui permet de mémoriser une valeur. Cette valeur est calculée une seule fois. Lorsque la valeur est demandée une seconde fois, elle est retournée directement. Cela permet d'éviter de calculer la valeur à chaque fois qu'elle est demandée. Regarde cette vidéo pour mieux comprendre : [https://youtu.be/TyWwJKMCKPY](https://youtu.be/TyWwJKMCKPY).

### `useMemo`

Cas de figure, vous avez un composant qui rend une liste de fruits (Encore... ça fait beaucoup là, non ?). Chaque fruit est un composant. Chaque fruit a un bouton qui permet de supprimer le fruit. Lorsque l'utilisateur clique sur le bouton, le fruit est supprimé de la liste. Pour cela, **il faut calculer la liste des fruits à chaque rendu du composant**. C'est pas très performant. Pour éviter cela, on peut utiliser `useMemo`.

#### Exemple

Ici nous allons mettre en place une liste de fruits. Chaque fruit a un bouton qui permet de supprimer le fruit. Pour cela nous allons utiliser `useMemo`.

```jsx
import React, { useState, useMemo } from "react";

function Fruit({ name, onDelete }) {
  return (
    <li>
      {name} <button onClick={onDelete}>Supprimer</button>
    </li>
  );
}

function List() {
  const [list, setList] = useState(["Pomme", "Poire", "Banane"]);

  const handleDelete = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  const fruits = useMemo(() =>
      list.map((item, index) => (
        <Fruit key={index} name={item} onDelete={() => handleDelete(index)} />
      )),
    [list]
  );

  return <ul>{fruits}</ul>;
}

export default List;
```

Que se passe t-il dans le `useMemo` avec le code suivant : `list.map((item, index) => <Fruit key={index} name={item} onDelete={() => handleDelete(index)} />)` ? On transforme la liste des fruits en une liste de composants fruits. C'est comme **faire une transformation** où on transforme chaque élément de la liste en un composant fruit. Ce qui est intéressant, c'est que cette transformation est effectuée uniquement lorsque la liste des fruits est modifiée. C'est-à-dire que la transformation est effectuée uniquement lorsque la liste des fruits est modifiée.

En fait, `useMemo` permet de mémoriser une valeur. Cette valeur est calculée une seule fois. Lorsque la valeur est demandée une seconde fois, elle est retournée directement. Cela permet d'éviter de calculer la valeur à chaque fois qu'elle est demandée.

Résumé : `useMemo` permet de mémoriser une valeur. Il est utilisé pour éviter de calculer une valeur à chaque rendu d'un composant. Lorsqu'on parle de "calculer une valeur", on parle de créer une nouvelle référence de valeur. C'est-à-dire que la valeur est calculée à chaque rendu du composant. Une fois de plus, ce n'est pas très performant.

---

## Hook de référence

Ce hook permet de récupérer une référence vers un élément du DOM. Il est utilisé pour manipuler le DOM. Il se nomme `useRef`. Il est similaire à `useMemo` mais il est utilisé pour manipuler le DOM.

### `useRef`

`useRef` permet de récupérer une référence vers un élément du DOM. Il prend en paramètre une valeur initiale. Cette valeur initiale est la valeur de la référence. La référence est un objet qui contient une propriété `current`. Cette propriété `current` est la valeur de la référence.

```jsx
const ref = useRef(initialValue);
```

La valeur initiale peut être `null`. Dans ce cas, la référence ne pointe vers aucun élément du DOM au départ.

#### Exemple

Ici nous allons mettre en place un compteur qui s'incrémente de `1` à chaque fois que l'utilisateur clique sur un bouton... Non, je plaisante. On va modifier le `h1` de la page avec le nom entré dans un champ de formulaire. Pour cela nous allons utiliser `useRef`.


```jsx
import React, { useRef } from "react";

function Form() {
  const ref = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    ref.current.textContent = event.target.name.value;
  };

// N.B: le hook useRef agit comme un querySelector -> dans l'exemple ci-dessous
// Bonjour sera REMPLACÉ par le texte de l'input validé par le bouton d'envoi
  return (
    <div>
      <h1 ref={ref}>Bonjour</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Form;
```

Que se passe t-il dans le `useRef` avec le code suivant : `useRef(null)` ? On initialise la référence à `null`. C'est-à-dire que la référence ne pointe vers aucun élément du DOM au départ. Ensuite, on passe la référence au `h1` avec la propriété `ref`. Cela permet de récupérer la référence vers le `h1`. Enfin, on peut utiliser la référence pour modifier le `h1`.

Résumé : `useRef` permet de récupérer une référence vers un élément du DOM. Il est utilisé pour manipuler le DOM. Son usage peut s'avérer utile dans certains cas. Il est similaire à `useMemo` mais pour manipuler le DOM.

---

Nous avons fait le tour des hooks de base. Il en existe d'autres. Vous pouvez les retrouver dans la documentation officielle de React. Il est également possible de créer ses propres hooks. C'est un sujet plus avancé. Nous allons nous arrêter là pour les hooks et nous concentrer sur la pratique pour maitriser les bases de React.