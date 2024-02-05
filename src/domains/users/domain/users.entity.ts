import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('USER', { schema: 'WITH_YOU' })
export class UsersEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
    comment: '사용자 ID',
  })
  id: number;

  @Column('varchar', {
    name: 'phone',
    comment: '사용자 연락처',
    nullable: false,
    length: 20,
  })
  phone: string;

  @Column('varchar', {
    name: 'name',
    comment: '사용자 명',
    nullable: false,
    length: 20,
  })
  name: string;

  @Column('varchar', {
    name: 'email',
    comment: '사용자 이메일',
    nullable: true,
    length: 100,
  })
  email: string;

  @Column('varchar', {
    name: 'sign_id',
    nullable: false,
    comment: '가입 아이디',
    length: 30,
  })
  signId: string;

  @Column('varchar', {
    name: 'password',
    nullable: false,
    comment: '비밀번호',
    length: 100,
  })
  password: string;

  @Column('varchar', {
    name: 'birthday',
    nullable: false,
    comment: '생년월일',
    length: 8,
  })
  birthday: string;

  @Column('enum', {
    name: 'gender',
    nullable: false,
    enum: Gender,
    comment: '성별',
  })
  gender: Gender;

  @Column('datetime', {
    name: 'signup_date',
    nullable: false,
    comment: '가입일시',
  })
  signupDate: Date;

  @Column('datetime', {
    name: 'leave_date',
    nullable: true,
    comment: '탈퇴일시',
  })
  leaveDate: Date;

  @Column('varchar', {
    name: 'leave_reason',
    nullable: true,
    comment: '탈퇴사유',
    length: 1000,
  })
  leaveReason: string;

  @Column('varchar', {
    name: 'APP_VER_NO',
    nullable: true,
    comment: '앱버전정보',
    length: 10,
  })
  appVerNo: string;

  @Column('varchar', {
    name: 'CODE_PUSH_NO',
    nullable: true,
    comment: '코드푸시버전정보',
    length: 10,
  })
  codePushNo: string;

  @Column('int', { name: 'ver_no', comment: '버젼', default: () => "'1'" })
  verNo: number;

  @Column('datetime', {
    name: 'created_at',
    comment: '등록일시',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('datetime', {
    name: 'updated_at',
    comment: '수정일시',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
