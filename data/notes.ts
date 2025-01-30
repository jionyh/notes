import { Note } from "@/types/note";

export const notes: Note[] = [
  {
    id: "1",
    title: "Ideias para o projeto",
    content:
      "Precisamos definir o escopo inicial e as principais funcionalidades.",
    isPublic: false,
    userId: "user-1",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    user: {
      id: "user-1",
      name: "Alice Silva",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    permissions: [
      {
        id: "p1",
        editor: true,
        noteId: "1",
        userId: "user-2",
        user: {
          id: "user-2",
          name: "Carlos Souza",
          avatar: "https://i.pravatar.cc/150?img=2",
        },
      },
    ],
  },
  {
    id: "2",
    title: "Lista de tarefas",
    content:
      "1. Criar layout\n2. Implementar autenticação\n3. Testar o sistema",
    isPublic: true,
    userId: "user-2",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    user: {
      id: "user-2",
      name: "Carlos Souza",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    permissions: [],
  },
  {
    id: "3",
    title: "Reunião com o time",
    content:
      "Vamos discutir os próximos passos do projeto na reunião de sexta-feira.",
    isPublic: false,
    userId: "user-3",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    user: {
      id: "user-3",
      name: "Fernanda Lima",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    permissions: [
      {
        id: "p2",
        editor: false,
        noteId: "3",
        userId: "user-1",
        user: {
          id: "user-1",
          name: "Alice Silva",
          avatar: "https://i.pravatar.cc/150?img=1",
        },
      },
    ],
  },
  {
    id: "1",
    title: "Ideias para o projeto",
    content:
      "Precisamos definir o escopo inicial e as principais funcionalidades.",
    isPublic: false,
    userId: "user-1",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    user: {
      id: "user-1",
      name: "Alice Silva",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    permissions: [
      {
        id: "p1",
        editor: true,
        noteId: "1",
        userId: "user-2",
        user: {
          id: "user-2",
          name: "Carlos Souza",
          avatar: "https://i.pravatar.cc/150?img=2",
        },
      },
    ],
  },
  {
    id: "2",
    title: "Lista de tarefas",
    content:
      "1. Criar layout\n2. Implementar autenticação\n3. Testar o sistema",
    isPublic: true,
    userId: "user-2",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    user: {
      id: "user-2",
      name: "Carlos Souza",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    permissions: [],
  },
  {
    id: "3",
    title: "Reunião com o time",
    content:
      "Vamos discutir os próximos passos do projeto na reunião de sexta-feira.",
    isPublic: false,
    userId: "user-3",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    user: {
      id: "user-3",
      name: "Fernanda Lima",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    permissions: [
      {
        id: "p2",
        editor: false,
        noteId: "3",
        userId: "user-1",
        user: {
          id: "user-1",
          name: "Alice Silva",
          avatar: "https://i.pravatar.cc/150?img=1",
        },
      },
    ],
  },
  {
    id: "1",
    title: "Ideias para o projeto",
    content:
      "Precisamos definir o escopo inicial e as principais funcionalidades.",
    isPublic: false,
    userId: "user-1",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    user: {
      id: "user-1",
      name: "Alice Silva",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    permissions: [
      {
        id: "p1",
        editor: true,
        noteId: "1",
        userId: "user-2",
        user: {
          id: "user-2",
          name: "Carlos Souza",
          avatar: "https://i.pravatar.cc/150?img=2",
        },
      },
    ],
  },
  {
    id: "2",
    title: "Lista de tarefas",
    content:
      "1. Criar layout\n2. Implementar autenticação\n3. Testar o sistema",
    isPublic: true,
    userId: "user-2",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    user: {
      id: "user-2",
      name: "Carlos Souza",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    permissions: [],
  },
  {
    id: "3",
    title: "Reunião com o time",
    content:
      "Vamos discutir os próximos passos do projeto na reunião de sexta-feira.",
    isPublic: false,
    userId: "user-3",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    user: {
      id: "user-3",
      name: "Fernanda Lima",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    permissions: [
      {
        id: "p2",
        editor: false,
        noteId: "3",
        userId: "user-1",
        user: {
          id: "user-1",
          name: "Alice Silva",
          avatar: "https://i.pravatar.cc/150?img=1",
        },
      },
    ],
  },
  {
    id: "1",
    title: "Ideias para o projeto",
    content:
      "Precisamos definir o escopo inicial e as principais funcionalidades.",
    isPublic: false,
    userId: "user-1",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    user: {
      id: "user-1",
      name: "Alice Silva",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    permissions: [
      {
        id: "p1",
        editor: true,
        noteId: "1",
        userId: "user-2",
        user: {
          id: "user-2",
          name: "Carlos Souza",
          avatar: "https://i.pravatar.cc/150?img=2",
        },
      },
    ],
  },
  {
    id: "2",
    title: "Lista de tarefas",
    content:
      "1. Criar layout\n2. Implementar autenticação\n3. Testar o sistema",
    isPublic: true,
    userId: "user-2",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    user: {
      id: "user-2",
      name: "Carlos Souza",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    permissions: [],
  },
  {
    id: "3",
    title: "Reunião com o time",
    content:
      "Vamos discutir os próximos passos do projeto na reunião de sexta-feira.",
    isPublic: false,
    userId: "user-3",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    user: {
      id: "user-3",
      name: "Fernanda Lima",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    permissions: [
      {
        id: "p2",
        editor: false,
        noteId: "3",
        userId: "user-1",
        user: {
          id: "user-1",
          name: "Alice Silva",
          avatar: "https://i.pravatar.cc/150?img=1",
        },
      },
    ],
  },
];
