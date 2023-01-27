// importing the prisma instance we created.
import prisma from './client';

// Prisma Client
const connect = async function connect() {
  try {
    // Connect the client
    await prisma.$connect();

    // await prisma.user.create({
    //   data: {
    //     email: 'demo@prisma.io',
    //     firstName: 'isa',
    //     lastName: 'abb',
    //     token: '2323223232323',
    //     ip:'121212121',
    //     deviceId:'121212121',
    //     deviceInfo:'121212121',
    //     posts: {
    //       create: { title: 'Hello World' },
    //     },
    //     profile: {
    //       create: { bio: 'I like turtles' },
    //     },
    //   },
    // })
  
    // const allUsers = await prisma.user.findMany({
    //   include: {
    //     posts: true,
    //     profile: true,
    //   },
    // })
    // console.dir(allUsers, { depth: null })

 /*    await prisma.user.create({
      data: {
        firstName: 'test',
        lastName: 'sabbagh',
        email: 'hello@prisma.com',
        token: '',
        profile: {
          create: {
            avatar: 'https://picsum.photos/200',
            bio: 'Lots of really interesting stuff',
            phone: 'my-first-post',
          },
        },
      },
    });

    const allUsers = await prisma.user.findMany({
      include: {
        profile: true,
      },
    }); */

    // const allUsers = await prisma.user.findMany({});

    // console.dir(allUsers, { depth: null });
    console.info('Database is Ready');
  } catch (err) {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  }
};
export default connect;
